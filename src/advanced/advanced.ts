// Properties
interface IProperties {
  firstName: string;
  lastName: string;
}
// Methods
interface IMethods {
  fullName(): string;
}

interface IModel<TData, TMethods> {
  data: TData;
  methods: TMethods;
}

type Model = IModel<IProperties, IMethods>;

class AdvancedUser implements Model {
  data: IProperties;
  methods: IMethods;

  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fullName: () => `${firstName} ${lastName}`,
    };
  }
}

const user1 = new AdvancedUser("Md. Mehedi", "Hasan");
console.log(user1.methods.fullName());
