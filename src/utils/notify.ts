export const notify = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') => {
    const event = new CustomEvent('show-notification', { detail: { message, type } });
    window.dispatchEvent(event);
};