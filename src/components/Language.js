import { LANGUAGES } from "../constants/language";
import { useTranslation } from "react-i18next";
// import select component from react-bootstrap
import { Form } from "react-bootstrap";

function Language() {
  const { i18n } = useTranslation();

  const onChangeLanguage = (e) => {
    const languageCode = e.target.value;
    console.log(languageCode);
    i18n.changeLanguage(languageCode);
  };

  return (
    <Form.Group controlId="language">
      <Form.Select defaultValue={i18n.language} onChange={onChangeLanguage}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default Language;
