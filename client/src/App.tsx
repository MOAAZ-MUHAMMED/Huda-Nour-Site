import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import TrainingDev from "@/pages/TrainingDev";
import Workshops from "@/pages/Workshops";
import Tests from "@/pages/Tests";
import Celebrations from "@/pages/Celebrations";
import Programs from "@/pages/Programs";
import ArabicProgram from "@/pages/ArabicProgram";
import QuranProgram from "@/pages/QuranProgram";
import MathProgram from "@/pages/MathProgram";
import EnglishProgram from "@/pages/EnglishProgram";
import HistoryProgram from "@/pages/HistoryProgram";
import LiteracyProgram from "@/pages/LiteracyProgram";
import CurriculumBooks from "@/pages/CurriculumBooks";
import TeachingMethod from "@/pages/TeachingMethod";
import Camps from "@/pages/Camps";
import CampGradeSix from "@/pages/CampGradeSix";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingHomeButton } from "@/components/FloatingHomeButton";

function Router() {
  return (
    <>
      <ScrollToTop />
      <FloatingHomeButton />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/workshops" component={Workshops} />
        <Route path="/tests" component={Tests} />
        <Route path="/celebrations" component={Celebrations} />
        <Route path="/programs" component={Programs} />
        <Route path="/programs/arabic" component={ArabicProgram} />
        <Route path="/programs/quran" component={QuranProgram} />
        <Route path="/programs/math" component={MathProgram} />
        <Route path="/programs/english" component={EnglishProgram} />
        <Route path="/programs/history" component={HistoryProgram} />
        <Route path="/programs/literacy" component={LiteracyProgram} />
        <Route path="/camps" component={Camps} />
        <Route path="/camps/grade-six" component={CampGradeSix} />
        <Route path="/curriculum-books" component={CurriculumBooks} />
        <Route path="/teaching-method" component={TeachingMethod} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
