import { Module } from '@nestjs/common';
import { PromotionDiscountController } from './promotion-discount.controller';

@Module({
  controllers: [PromotionDiscountController],
})
export class PromotionDiscountModule {}
