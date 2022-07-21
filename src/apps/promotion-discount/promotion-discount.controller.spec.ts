import { Test, TestingModule } from '@nestjs/testing';
import { PromotionDiscountController } from './promotion-discount.controller';

describe('PromotionDiscountController', () => {
  let controller: PromotionDiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromotionDiscountController],
    }).compile();

    controller = module.get<PromotionDiscountController>(
      PromotionDiscountController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
