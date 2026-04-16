/* Design Philosophy — Neo-Atelier Italian Editorial
   The app shell should stay minimal and unobtrusive so the homepage reads
   like a curated showroom sequence. Global wrappers must preserve the dark,
   luxurious atmosphere and never dilute the editorial hierarchy. */

import Home from "@/pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Home />
    </div>
  );
}

export default App;
