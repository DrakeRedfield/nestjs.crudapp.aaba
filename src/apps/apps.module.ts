import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { SaleModule } from './sale/sale.module';
import { ProductModule } from './product/product.module';
import { PromotionDiscountModule } from './promotion-discount/promotion-discount.module';
import { CategoryModule } from './category/category.module';
import { JobModule } from './job/job.module';
import { LoginModule } from './login/login.module';

@Module({
  exports: [
    EmployeeModule,
    SaleModule,
    ProductModule,
    PromotionDiscountModule,
    CategoryModule,
    JobModule,
    LoginModule,
  ],
  imports: [
    EmployeeModule,
    SaleModule,
    ProductModule,
    PromotionDiscountModule,
    CategoryModule,
    JobModule,
    LoginModule,
  ],
})
export class AppsModule {}
