import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { Injectable } from "@nestjs/common";
import { NotificationNotFound } from "./errors/notification-not-found";

interface ICancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationRequest = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository){}

  async execute(request: ICancelNotificationRequest): Promise<CancelNotificationRequest>{
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(notificationId);

    if(!notification){
      throw new NotificationNotFound();
    }

    notification.cancel();
    await this.notificationsRepository.save(notification);
  }
}