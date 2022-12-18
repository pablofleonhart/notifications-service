import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { Injectable } from "@nestjs/common";

interface IGetRecipientNotificationRequest {
  recipientId: string;
}

interface IGetRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository){}

  async execute(request: IGetRecipientNotificationRequest): Promise<IGetRecipientNotificationResponse>{
    const { recipientId } = request;
    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {notifications};
  }
}