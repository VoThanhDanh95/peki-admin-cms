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
import QuestionContentList from "./pages/questionContent/QuestionContentList";
import ExerciseDetail from "./pages/exercise/ExerciseDetail";
import QuestionContentDetail from "./pages/questionContent/QuestionContentDetail";
import QuestionContentEdit from "./pages/questionContent/QuestionContentEdit";
import QuestionContentCreate from "./pages/questionContent/QuestionContentCreate";
import ExerciseCreate from "./pages/exercise/ExerciseCreate";
import ExerciseEdit from "./pages/exercise/ExerciseEdit";
import './stytles.css'

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider}>
    <Resource
      name="exercises"
      list={ExerciseList}
      edit={ExerciseEdit}
      show={ExerciseDetail}
      create={ExerciseCreate}
    />
    <Resource
      name="question_contents"
      list={QuestionContentList}
      show={QuestionContentDetail}
      edit={QuestionContentEdit}
      create={QuestionContentCreate}
    />
  </Admin>
);
