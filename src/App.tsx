import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { ExerciseList } from "./pages/exercise/ExerciseList";
import { i18nProvider } from "./i18nProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider}>
    <Resource
      name="exercises"
      list={ExerciseList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
