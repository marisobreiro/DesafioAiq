export enum Category {
  MensClothing = "men's clothing",
  WomensClothing = "women's clothing",
  Jewelery = 'jewelery',
  Electronics = 'electronics',
}

export const categoryTranslations: Record<Category, string> = {
  [Category.MensClothing]: 'Roupas Masculinas',
  [Category.WomensClothing]: 'Roupas Femininas',
  [Category.Jewelery]: 'Joias',
  [Category.Electronics]: 'Eletrônicos',
};
