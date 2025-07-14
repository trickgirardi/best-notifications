export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  CUSTOM = 'custom',
}

export interface Notification {
  id: string;
  userId?: string;
  title: string;
  description: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}
