import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Voce recebeu uma solicitacao de amizade'),
            category: 'social',
            recipientId: 'example-recipient-id'
        });

        expect(notification).toBeTruthy();
    });
});