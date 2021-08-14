{
  //Record는 앞의 인자가 key가 되고, 뒤의 인자가 value가 되도록 묶어줌.

  type Page = 'home' | 'about' | 'contact';

  type PageInfo = {
    title: string | number;
  };

  const nav: Record<Page, PageInfo> = {
    home: {title: 'Home'},
    about: {title: 'About'},
    contact: {title: 'Contact'},
  };

  type BonInfo = 'name' | 'age';

  const info: Record<BonInfo, PageInfo> = {
    name: {title: 'bon'},
    age: {title: 30},
  };
}
