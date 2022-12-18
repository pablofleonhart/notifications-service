import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { Injectable } from "@nestjs/common";

interface ICountRecipientNotificationRequest {
  recipientId: string;
}

interface ICountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository){}

  async execute(request: ICountRecipientNotificationRequest): Promise<ICountRecipientNotificationResponse>{
    const { recipientId } = request;
    const count = await this.notificationsRepository.countManyByRecipientId(recipientId);

    return { count };
  }
}