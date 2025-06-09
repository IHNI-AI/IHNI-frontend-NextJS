import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import NetworkVisualization from '@/components/NetworkVisualization';

const plans = [
  {
    name: 'Pro',
    price: '$39.90',
    description: 'Starts at $39.90, decreases by $5/month until $19.90. Resets if you cancel and resubscribe.',
    features: [
      'Access to all trends',
      'Dynamic pricing',
      'Email support',
    ],
    highlight: false,
    checkoutUrl: 'https://buy.polar.sh/polar_cl_N6Qq27JRRAeLyNwktdGhQjoRPyvbyWH4k8R1w0f8DLD',
  },
  {
    name: 'Premium',
    price: '$99.90',
    description: 'Flat $99.90/month. All Pro features plus priority support and early access to new features.',
    features: [
      'All Pro features',
      'Priority support',
      'Early access to new features',
    ],
    highlight: true,
    checkoutUrl: 'https://buy.polar.sh/polar_cl_M4KQPCuyU5oBWzwOwZmpfOhWcHto5vTVXvJtt363Pln',
  },
];

const Pricing: React.FC = () => {
  const checkoutContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.getElementById('polar-embed')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js';
      script.defer = true;
      script.setAttribute('data-auto-init', '');
      script.id = 'polar-embed';
      document.body.appendChild(script);
      script.onload = () => {
        setTimeout(() => {
          // @ts-ignore
          if ((window as any).PolarCheckout?.autoInit) (window as any).PolarCheckout.autoInit();
        }, 0);
      };
    } else {
      setTimeout(() => {
        // @ts-ignore
        if ((window as any).PolarCheckout?.autoInit) (window as any).PolarCheckout.autoInit();
      }, 0);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      if ((window as any).PolarCheckout?.autoInit) (window as any).PolarCheckout.autoInit();
    }, 0);
  });

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col relative overflow-hidden">
      <nav className="absolute top-0 left-0 w-full p-4 z-20">
        <Navbar />
      </nav>
      {/* <div className="absolute left-0 right-0 z-0" style={{ top: '64px', height: 'calc(100% - 64px)' }}>
        <NetworkVisualization onlyParticles />
      </div> */}
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
          Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime. No hidden fees.
        </p>
        <div
          className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-4xl"
          ref={checkoutContainerRef}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg p-8 flex-1 max-w-sm w-full border-2 transition-all ${plan.highlight ? 'border-brand-blue scale-105' : 'border-transparent'}`}
              dangerouslySetInnerHTML={{
                __html: `
                  <h2 class=\"text-2xl font-bold mb-2 text-gray-800 text-center\">${plan.name}</h2>
                  <div class=\"text-3xl font-extrabold text-brand-blue text-center mb-2\">${plan.price}</div>
                  <p class=\"text-gray-600 text-center mb-6\">${plan.description}</p>
                  <ul class=\"mb-8 space-y-2\">
                    ${plan.features.map(
                      (feature) =>
                        `<li class=\"flex items-center text-gray-700\">\n  <span class=\"inline-block w-2 h-2 bg-brand-blue rounded-full mr-2\"></span>\n  ${feature}\n</li>`
                    ).join('')}
                  </ul>
                  <a
                    href=\"${plan.checkoutUrl}\"
                    data-polar-checkout
                    data-polar-checkout-theme=\"light\"
                    class=\"w-full block py-3 rounded-xl font-semibold text-center transition-colors ${plan.highlight ? 'bg-brand-blue text-white hover:bg-blue-700' : 'bg-blue-50 text-brand-blue hover:bg-blue-100'}\"
                  >
                    ${plan.name === 'Pro' ? 'Subscribe to Pro' : 'Subscribe to Premium'}
                  </a>
                `,
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pricing; 