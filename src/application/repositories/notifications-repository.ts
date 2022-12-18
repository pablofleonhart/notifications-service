import { Notification } from "../entities/notification";

export abstract class NotificationsRepository {
    abstract countManyByRecipientId(recipientId: string): Promise<number>;
    abstract findById(notificationId: string): Promise<Notification | null>;
    abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    abstract create(notification: Notification): Promise<void>;
    abstract save(notification: Notification): Promise<void>;
}