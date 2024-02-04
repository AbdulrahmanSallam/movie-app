export class Contact {
  constructor() {
    this.inputs = $(".inputs input");
    this.pError = document.getElementById("error");
    // check validation
    $("#submitBtn").on("click", () => {
      if (
        this.validationName() &&
        this.validationEmail() &&
        this.validationPhone &&
        this.validationAge() &&
        this.validationPass()
      ) {
        console.log("true");
        this.pError.classList.add("d-none");
        $(".inputs input").removeClass("border-danger");
      } else {
        this.pError.classList.remove("d-none");
      }
    });
  }

  validationName() {
    const RegexName = /^[a-zA-Z ]+$/;
    if (RegexName.test(this.inputs[0].value)) {
      this.inputs[0].classList.remove("border-danger");
      return true;
    } else {
      this.inputs[0].classList.add("border-danger");
      return false;
    }
  }

  validationEmail() {
    const RegexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (RegexEmail.test(this.inputs[1].value)) {
      this.inputs[1].classList.remove("border-danger");
      return true;
    } else {
      this.inputs[1].classList.add("border-danger");
      return false;
    }
  }

  validationAge() {
    if (+this.inputs[3].value > 0 && +this.inputs[3].value < 200) {
      this.inputs[3].classList.remove("border-danger");
      return true;
    } else {
      this.inputs[3].classList.add("border-danger");
      return false;
    }
  }

  validationPhone() {
    const RegexPhone = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g;
    if (RegexPhone.test(this.inputs[2].value)) {
      this.inputs[2].classList.remove("border-danger");
      return true;
    } else {
      this.inputs[2].classList.add("border-danger");
      return false;
    }
  }

  validationPass() {
    const RegexPass = /^\w{8,}$/;
    if (
      RegexPass.test(this.inputs[4].value) &&
      RegexPass.test(this.inputs[5].value) &&
      this.samePass()
    ) {
      this.inputs[4].classList.remove("border-danger");
      this.inputs[5].classList.remove("border-danger");
      return true;
    } else {
      this.inputs[4].classList.add("border-danger");
      this.inputs[5].classList.add("border-danger");
      return false;
    }
  }

  samePass() {
    if (this.inputs[4].value == this.inputs[5].value) return true;
    else return false;
  }
}
