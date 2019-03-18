const app = getApp();

Page({
  data: {
    focused: false,
    dialogClass: '',
    answers: [],
    inputValue: '',
    scrollTop: 0
  },
  onLoad() {
    // const { answers } = this.data;
    // for(let i = 0; i < 40; i++) {
    //   answers.push(i);
    // }
    // this.setData({
    //   answers
    // });
  },
  onInputFocus(e) {
    this.setData({
      dialogClass: 'moveToBottom',
      focused: true,
      scrollTop: 10000
    });
  },
  onInputBlur(e) {
    this.setData({
      dialogClass: 'moveToTop',
      focused: false
    });
  },
  getJustifiedValue(v) {
    // Apply validation here
    // Returns desired value with possible modification to the raw value.
    return v;
  },
  onInput({ detail }) {
    const { value } = detail;
    console.log('value', value);

    const justifiedValue = this.getJustifiedValue(value);
    // Keep track of the input value in data.inputValue
    this.setData({
      inputValue: justifiedValue
    });
    // The returned value has the final say on what appears in the input.
    return justifiedValue;
  },
  onConfirm() {
    const { answers, inputValue } = this.data;
    this.setData({
      answers: [...answers, inputValue],
      inputValue: '' // Last but not least, empty the input box.
    });
  },
  formReset() {
    console.log('reset');
  }
});
