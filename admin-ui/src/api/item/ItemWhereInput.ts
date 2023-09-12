import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
};
