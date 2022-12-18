import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { CountRecipientNotification } from "./count-recipient-notifications";
import { makeNotification } from "@test/factories/notification-factory";

describe('Count recipient notifications', () => {
    it('should be able to count notification by recipientId', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotification = new CountRecipientNotification(notificationsRepository);

        await notificationsRepository.create(
          makeNotification({recipientId: 'recipient-1'})
        );

        await notificationsRepository.create(
          makeNotification({recipientId: 'recipient-1'})
        );

        await notificationsRepository.create(
          makeNotification({recipientId: 'recipient-2'})
        );

        const { count } = await countRecipientNotification.execute({recipientId: 'recipient-1'});
        expect(count).toEqual(2);
    });
});