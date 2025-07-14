import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { Notification, NotificationType } from '../types/notifications.type';

export class CreateNotificationDto implements Partial<Notification> {
  @IsString()
  @IsOptional()
  userId?: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(() => NotificationType)
  type: NotificationType;

  @IsBoolean()
  isRead: boolean;
}
