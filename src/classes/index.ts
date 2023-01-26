// public, private, protected

// public => 제한 없음, 누구나 access 가능

// private => 특정 class 안에서만 access 가능

// protected => 특정 class 안에서 access 가능, 상속 받는 class 안에서 access 가능

class Base {
  first = "";
  public second = "";
  protected third = "";
  private fourth = "";
}

class Inherited extends Base {
  myFunction() {
    this.first;
    this.second;
    this.third;
    // this.fourth; // private: 클래스 안에서만 사용 가능
  }
}

const inherited = new Inherited();

inherited.first;
inherited.second;
// inherited.third // protected: 인스턴트에서는 사용 불가
// inherited.fourth // private: 클래스 안에서만 사용 가능
