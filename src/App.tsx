import { Navigate, Route, Routes } from 'react-router-dom'
import { BackToHub } from './shared/BackToHub'
import { ScrollManager } from './shared/ScrollManager'
import { HubPage } from './sites/hub/HubPage'
import { LanguageProvider } from './sites/muru/i18n'
import { MuruLayout } from './sites/muru/MuruLayout'
import { GrowingPage } from './sites/muru/pages/GrowingPage'
import { HomePage as MuruHomePage } from './sites/muru/pages/HomePage'
import { LifePage } from './sites/muru/pages/LifePage'
import { MuruStubPage } from './sites/muru/pages/MuruStubPage'
import { PlansPage } from './sites/muru/pages/PlansPage'
import { TechnologyPage } from './sites/muru/pages/TechnologyPage'
import { HomePage as RoboticsHomePage } from './sites/robotics/HomePage'
import { NewsArticlePage } from './sites/robotics/NewsArticlePage'
import { RoboticsLayout } from './sites/robotics/RoboticsLayout'
import { RoboticsStubPage } from './sites/robotics/RoboticsStubPage'

export default function App() {
  return (
    <>
      <ScrollManager />
      <BackToHub />
      <Routes>
        <Route index element={<HubPage />} />
        <Route path="robotics" element={<RoboticsLayout />}>
          <Route index element={<RoboticsHomePage />} />
          <Route path="news/:slug" element={<NewsArticlePage />} />
          <Route path="care-guide" element={<RoboticsStubPage page="careGuide" />} />
          <Route path="warranty" element={<RoboticsStubPage page="warranty" />} />
          <Route path="privacy" element={<RoboticsStubPage page="privacy" />} />
          <Route path="terms" element={<RoboticsStubPage page="terms" />} />
        </Route>
        <Route
          path="muru"
          element={
            <LanguageProvider>
              <MuruLayout />
            </LanguageProvider>
          }
        >
          <Route index element={<MuruHomePage />} />
          <Route path="growing-together" element={<GrowingPage />} />
          <Route path="life-with-muru" element={<LifePage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="the-app" element={<PlansPage />} />
          <Route path="care-guide" element={<MuruStubPage page="careGuide" />} />
          <Route path="privacy" element={<MuruStubPage page="privacy" />} />
          <Route path="terms" element={<MuruStubPage page="terms" />} />
          <Route path="accessibility" element={<MuruStubPage page="accessibility" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
