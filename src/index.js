
import modal from '/modules/modal';
import accardion from '/modules/accardion';
import slider from '/modules/slider';
import { slowScrollLink, scrollStart} from "./modules/scroll";
import swiperSlider from '/modules/swiperSlider';
import validation from '/modules/validation';
import sendForm from '/modules/sendForm'

modal();
slowScrollLink();
scrollStart();
accardion();
slider();
validation();
sendForm({ formId: 'form-callback'});