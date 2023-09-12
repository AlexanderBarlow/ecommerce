import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemModuleBase } from "./base/item.module.base";
import { ItemService } from "./item.service";
import { ItemResolver } from "./item.resolver";

@Module({
  imports: [ItemModuleBase, forwardRef(() => AuthModule)],
  providers: [ItemService, ItemResolver],
  exports: [ItemService],
})
export class ItemModule {}
