import { Content } from "@application/entities/content";
import { INotification, Notification } from "@application/entities/notification";

type Override = Partial<INotification>

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a new notification'),
    category: 'social',
    recipientId: 'recipient-1',
    ...override
  });
}