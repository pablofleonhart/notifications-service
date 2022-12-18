import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { Injectable } from "@nestjs/common";
import { NotificationNotFound } from "./errors/notification-not-found";

interface IReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationRequest = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository){}

  async execute(request: IReadNotificationRequest): Promise<ReadNotificationRequest>{
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(notificationId);

    if(!notification){
      throw new NotificationNotFound();
    }

    notification.read();
    await this.notificationsRepository.save(notification);
  }
}