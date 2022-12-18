import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";
import { makeNotification } from "@test/factories/notification-factory";
import { ReadNotification } from "./read-notification";

describe('Read notification', () => {
    it('should be able to read a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const readNotification = new ReadNotification(notificationsRepository);

        const notification = makeNotification({
            recipientId: 'example-recipient-id',
        });

        await notificationsRepository.create(notification);
        await readNotification.execute({notificationId: notification.id});

        expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date))
    });

    it('should not be able to read a non existent notification', async() => {
      const notificationsRepository = new InMemoryNotificationsRepository();
      const readNotification = new ReadNotification(notificationsRepository);

      expect(() => {
        return readNotification.execute({
          notificationId: 'test-id',
        });
      }).rejects.toThrow(NotificationNotFound);
    });
});