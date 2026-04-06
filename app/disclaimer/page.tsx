export default function DisclaimerPage() {
  return (
    <div className="bg-slate-950 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Disclaimer</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-slate-300 mb-6">
            <strong>Last Updated:</strong> January 1, 2026
          </p>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 mb-8">
            <p className="text-slate-300 font-semibold">
              IMPORTANT: Please read this disclaimer carefully before using FleetJustice services or relying on information provided on our website.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">No Professional Advice</h2>
          <p className="text-slate-300 mb-6">
            The information provided on the FleetJustice website is for general informational purposes only. Nothing on this website constitutes professional advice, including but not limited to legal, insurance, financial, or business advice. You should not act or refrain from acting based solely on information found on this website without first consulting with qualified professionals.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Insurance Information Disclaimer</h2>
          <p className="text-slate-300 mb-6">
            FleetJustice acts as an insurance broker and intermediary. We are not an insurance carrier and do not underwrite insurance policies. All insurance quotes are provided by third-party insurance companies, and actual coverage terms, conditions, and pricing are determined by the insurance carriers. We make no guarantees regarding insurance approval, pricing, or coverage availability. Insurance rates and coverage options vary based on numerous factors including but not limited to driving history, vehicle type, cargo, operating radius, and claims history.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Legal Services Disclaimer</h2>
          <p className="text-slate-300 mb-6">
            Information about legal services on this website is for general informational purposes only and does not constitute legal advice. An attorney-client relationship is not formed merely by visiting our website or contacting us. Legal advice can only be provided after formal consultation with a licensed attorney and execution of an engagement agreement. Past results do not guarantee future outcomes. Settlement amounts and case results mentioned on our website are specific to individual cases and should not be interpreted as predictions of outcomes in other cases.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">DOT and FMCSA Compliance</h2>
          <p className="text-slate-300 mb-6">
            While we strive to provide accurate information about DOT and FMCSA regulations, transportation laws and requirements change frequently. The information on our website may not reflect the most current regulations. You are solely responsible for ensuring your operations comply with all applicable federal, state, and local laws and regulations. We recommend consulting directly with DOT compliance specialists and legal counsel regarding specific compliance requirements.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">No Guarantee of Results</h2>
          <p className="text-slate-300 mb-6">
            FleetJustice makes no guarantees, representations, or warranties regarding the results you may achieve through our services. Your results will depend on numerous factors beyond our control, including market conditions, your specific circumstances, and actions taken by third parties. Testimonials, case studies, and settlement amounts displayed on our website represent individual experiences and should not be interpreted as typical or guaranteed results.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Accuracy of Information</h2>
          <p className="text-slate-300 mb-6">
            We make reasonable efforts to ensure the accuracy of information on our website, but we make no representations or warranties about the completeness, accuracy, reliability, or timeliness of any content. Information may become outdated, and we are under no obligation to update or correct information. You use all information at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Third-Party Information</h2>
          <p className="text-slate-300 mb-6">
            Our website may contain references to third-party products, services, or websites. We do not endorse or guarantee any third-party offerings. We are not responsible for the accuracy, legality, or content of external sites or resources. Links to third-party sites are provided for convenience only.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">YMYL Content Disclaimer</h2>
          <p className="text-slate-300 mb-6">
            This website contains information that may affect your financial security, health, safety, or well-being (Your Money or Your Life content). Such information should not be your sole basis for making important decisions. Always verify information with multiple sources and consult with qualified professionals before making decisions that could significantly impact your finances, business, or legal standing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-slate-300 mb-6">
            To the fullest extent permitted by law, FleetJustice, its officers, directors, employees, and affiliates shall not be liable for any damages arising from your use of our website or services, including but not limited to direct, indirect, incidental, punitive, and consequential damages. This limitation applies even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">State-Specific Disclaimers</h2>
          <p className="text-slate-300 mb-6">
            Insurance and legal services are regulated at the state level, and requirements vary by jurisdiction. The information on our website may not be applicable in all states. You are responsible for understanding and complying with the laws and regulations specific to your state of operation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Professional Licensing</h2>
          <p className="text-slate-300 mb-6">
            FleetJustice works with licensed insurance agents and attorneys. Licensing requirements vary by state. We make reasonable efforts to ensure all professionals we work with maintain current, valid licenses, but we cannot guarantee the licensure status of third-party professionals at any given time.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes to This Disclaimer</h2>
          <p className="text-slate-300 mb-6">
            We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting to our website. Your continued use of our website after changes constitutes acceptance of the modified disclaimer.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-300 mb-4">
            If you have questions about this disclaimer:
          </p>
          <ul className="list-none text-slate-300 mb-6 space-y-2">
            <li>Email: info@fleetjustice.com</li>
            <li>Phone: 1-800-FLEET-LAW</li>
          </ul>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mt-8">
            <p className="text-slate-300 text-sm">
              BY USING THIS WEBSITE AND ITS SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS DISCLAIMER. IF YOU DO NOT AGREE, PLEASE DO NOT USE OUR WEBSITE OR SERVICES.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
