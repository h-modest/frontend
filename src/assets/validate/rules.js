export const rules = {
  mobile: {
    getMessage: field => '联系电话格式不正确',
    validate: value =>
      value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
}
