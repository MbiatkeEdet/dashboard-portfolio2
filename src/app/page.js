import ProfileOverview from "./components/ProfileOverview"
import RecentProjects from "./components/RecentProjects"
import ClientFeedback from "./components/ClientFeedback"
import EarningsSummary from "./components/EarningsSummary"
import SiteHeader from "./components/SiteHeader"
import SiteFooter from "./components/SiteFooter"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <ProfileOverview />
        <RecentProjects />
        <ClientFeedback />
        <EarningsSummary />
      </main>
      <SiteFooter />
    </div>
  )
}
