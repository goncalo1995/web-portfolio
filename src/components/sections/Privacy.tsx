export const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h1>
        
        <div className="space-y-6 text-foreground/80 leading-relaxed font-light">
          <p>
            Welcome to my personal portfolio. I believe in keeping things simple and respecting your privacy.
          </p>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">No Tracking or Analytics</h2>
            <p>
              This website does not use any cookies, tracking scripts, or analytics tools (such as Google Analytics). 
              Your visit is completely private, and I do not collect or store any personal information about your 
              browsing habits on this site.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Hosting</h2>
            <p>
              This website is statically hosted on <strong>Cloudflare Pages</strong>. 
              As a result, Cloudflare may collect standard infrastructure logs (such as IP addresses and user agents) 
              for security and operational purposes. You can review Cloudflare's privacy policy for more details on 
              how they handle edge infrastructure data.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              If you choose to contact me via email (the "Get in Touch" links), your email address and any information 
              you provide will only be used to respond to your inquiry and will not be shared with any third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
