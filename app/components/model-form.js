import FormFor from 'ember-form-for/components/form-for';


const ModelForm = FormFor.extend({
});

ModelForm.reopenClass({
  positionalParams: ['object'],
});

export default ModelForm;
