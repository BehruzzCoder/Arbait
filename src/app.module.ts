import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionModule } from './region/region.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { LevelModule } from './level/level.module';
import { CapacityModule } from './capacity/capacity.module';
import { SizeModule } from './size/size.module';
import { GeneralInfoModule } from './general-info/general-info.module';
import { ContactModule } from './contact/contact.module';
import { FaqModule } from './faq/faq.module';
import { ShowcaseModule } from './showcase/showcase.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [RegionModule, PrismaModule, UserModule, MailModule, LevelModule, CapacityModule, SizeModule, GeneralInfoModule, ContactModule, FaqModule, ShowcaseModule, PartnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
