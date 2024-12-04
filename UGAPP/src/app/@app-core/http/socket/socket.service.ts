import { Injectable } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private stompClient: Client;
  constructor(
    private router:Router
  ) {
    // Khởi tạo `Client` với các tùy chọn cần thiết
    this.stompClient = new Client({
        webSocketFactory: () => new SockJS('http://localhost:8080/api/v1/ws'),
        reconnectDelay: 5000,
        connectHeaders: {
            "Authorization": "Bearer " + localStorage.getItem('authToken')  //đặt token zo đây đi// Đặt token vào headers để kết nối
        }, //thì h e lấy từ local ra đi
        onConnect: (frame) => {
            console.log('Connected:', frame);
            this.subscribeToGroup();
        },
        onStompError: (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
        }
    });
}
  connect(token: string): void {
    if (!token) {
      alert("Please enter your token.");
      return;
    }

    // Đặt header Authorization với Bearer token
    this.stompClient.connectHeaders = {
      Authorization: "Bearer " + token,
    };

    // Kết nối WebSocket
    this.stompClient.activate();
  }

  subscribeToGroup(): void {
    // Đăng ký lắng nghe tin nhắn từ /queue/group
    this.stompClient.subscribe('/user/queue/group', (message: IMessage) => {
      const data = JSON.parse(message.body);
      this.handleMessage(data);
      // this.router.navigate(['/tabs/tab2'], { queryParams: {fullname:data.fullname,phone:data.phone,lat:data.lat,lon:data.lon}});

      return data;
      
      
    });
  }

  sendMessage(token: string, location: { lat: string; lon: string }): void {
    if (!token) {
        alert("Please enter your token before sending messages.");
        return;
    }

    const { lat, lon } = location;
    if (lat && lon) {
        const addressSOSCreateDTO = {
            status: true,
            startDate: new Date().toISOString(),
            lat: lat,
            lon: lon
        };

        // Kiểm tra kết nối WebSocket trước khi gửi tin nhắn
        if (this.stompClient && this.stompClient.active) {
            this.stompClient.publish({
                destination: "/app/sendAddressSOS",
                body: JSON.stringify(addressSOSCreateDTO),
                headers: { "Authorization": "Bearer " + token }
            });
            console.log("success")
        } else {
            console.error("WebSocket is not connected.");
        }
    } else {
        alert("Please enter latitude and longitude.");
    }
}

  disconnect(): void {
    if (this.stompClient) {
      this.stompClient.deactivate();
      console.log("Disconnected");
    }
  }

  private handleMessage(data: any): void {
    console.log("Message received from server:", data);
    this.router.navigate(['/tabs/tab2'], { queryParams: {fullname:data.fullname,phone:data.phone,lat:data.lat,lon:data.lon}});

    // Xử lý tin nhắn từ server ở đây
  }
}