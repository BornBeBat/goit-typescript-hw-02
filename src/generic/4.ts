/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Ipages {
  title: string;
}

class Component<T> {

  constructor(public props: T) {

  }
}

class Page extends Component<Ipages> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { };