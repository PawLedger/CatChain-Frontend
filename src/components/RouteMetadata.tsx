import Head from 'next/head';

type RouteCopy = {
  title: string;
  description: string;
  indexable?: boolean;
};

const ROUTE_COPY: Record<string, RouteCopy> = {
  '/': {
    title: 'CatChain | Pet Care Companion',
    description: 'Organize pet care and connect with trusted veterinary clinics with CatChain.',
    indexable: true,
  },
  '/about': {
    title: 'About CatChain',
    description: 'Learn about CatChain and our approach to connected pet care.',
    indexable: true,
  },
  '/clinics': {
    title: 'Veterinary Clinics | CatChain',
    description: 'Explore veterinary clinics and services with CatChain.',
    indexable: true,
  },
  '/clinics/[id]': {
    title: 'Clinic Profile | CatChain',
    description: 'View a veterinary clinic profile and its services on CatChain.',
    indexable: true,
  },
  '/pets/[id]': {
    title: 'Pet Profile | CatChain',
    description: 'Manage a pet profile in your CatChain account.',
  },
  '/pets/[id]/emergency': {
    title: 'Emergency Access Settings | CatChain',
    description: 'Manage emergency access settings for a pet in CatChain.',
  },
  '/scan/[id]': {
    title: 'Emergency Pet Access | CatChain',
    description: 'CatChain emergency tag access page.',
  },
  '/lab-results': {
    title: 'Account Records | CatChain',
    description: 'Manage saved records in your CatChain account.',
  },
  '/qrcode': {
    title: 'QR Code Tags | CatChain',
    description: 'Manage QR tags in your CatChain account.',
  },
  '/wallet': {
    title: 'Wallet | CatChain',
    description: 'Manage your CatChain wallet.',
  },
  '/admin/reports': {
    title: 'Admin Reports | CatChain',
    description: 'Manage CatChain administration reports.',
  },
  '/admin/sms': {
    title: 'SMS Dashboard | CatChain',
    description: 'Manage CatChain messaging administration.',
  },
  '/admin/security': {
    title: 'Security Dashboard | CatChain',
    description: 'Manage CatChain security settings.',
  },
  '/review': {
    title: 'Rate CatChain | CatChain',
    description: 'Share feedback about your experience with CatChain.',
  },
  '/sessions': {
    title: 'Active Sessions | CatChain',
    description: 'Review active sessions for your CatChain account.',
  },
  '/offline': {
    title: 'Offline | CatChain',
    description: 'CatChain is currently unavailable offline.',
  },
  '/activity-log': {
    title: 'Activity Log | CatChain',
    description: 'Review activity for your CatChain account.',
  },
  '/dental': {
    title: 'Dental Care | CatChain',
    description: 'Manage dental care entries in your CatChain account.',
  },
  '/notifications': {
    title: 'Notifications | CatChain',
    description: 'Manage notifications for your CatChain account.',
  },
  '/rate': {
    title: 'Exchange Rates | CatChain',
    description: 'View exchange rates in CatChain.',
  },
  '/appointments': {
    title: 'Appointments | CatChain',
    description: 'Manage appointments in your CatChain account.',
  },
  '/analytics': {
    title: 'Analytics | CatChain',
    description: 'Review account analytics in CatChain.',
  },
  '/account-settings': {
    title: 'Account Settings | CatChain',
    description: 'Manage your CatChain account settings.',
  },
  '/dashboard': {
    title: 'Dashboard | CatChain',
    description: 'View your CatChain account dashboard.',
  },
  '/forgot-password': {
    title: 'Reset Password | CatChain',
    description: 'Reset the password for your CatChain account.',
  },
  '/login': {
    title: 'Sign In | CatChain',
    description: 'Sign in to your CatChain account.',
  },
  '/onboarding': {
    title: 'Get Started | CatChain',
    description: 'Set up your CatChain account.',
  },
  '/preferences': {
    title: 'Preferences | CatChain',
    description: 'Manage your CatChain preferences.',
  },
  '/profile': {
    title: 'Profile | CatChain',
    description: 'Manage your CatChain profile.',
  },
  '/register': {
    title: 'Create Account | CatChain',
    description: 'Create a CatChain account.',
  },
  '/search': {
    title: 'Search | CatChain',
    description: 'Search CatChain.',
  },
  '/surgeries': {
    title: 'Care Records | CatChain',
    description: 'Manage care entries in your CatChain account.',
  },
  '/transactions': {
    title: 'Transactions | CatChain',
    description: 'Review transactions in your CatChain account.',
  },
  '/two-factor': {
    title: 'Two-Factor Authentication | CatChain',
    description: 'Manage two-factor authentication for your CatChain account.',
  },
  '/verify-account': {
    title: 'Verify Account | CatChain',
    description: 'Verify your CatChain account.',
  },
  '/verify-email': {
    title: 'Verify Email | CatChain',
    description: 'Verify the email address for your CatChain account.',
  },
  '/reset-password': {
    title: 'Reset Password | CatChain',
    description: 'Choose a new password for your CatChain account.',
  },
  '/performance': {
    title: 'Performance | CatChain',
    description: 'Review CatChain performance metrics.',
  },
};

export type RouteMetadataValues = {
  title: string;
  description: string;
  canonical: string;
  robots: 'index, follow' | 'noindex, nofollow';
};

function resolveSiteOrigin(): string {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
  const candidate =
    configuredUrl ||
    (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');

  try {
    const url = new URL(candidate);
    if (url.protocol === 'http:' || url.protocol === 'https:') {
      return url.origin;
    }
  } catch {
    // Use the local fallback when the configured public URL is invalid.
  }

  return 'http://localhost:3000';
}

export function getRouteMetadata(
  pathname: string,
  asPath: string,
  siteOrigin = resolveSiteOrigin()
): RouteMetadataValues {
  const route = ROUTE_COPY[pathname] ?? {
    title: 'CatChain',
    description: 'Manage your CatChain account.',
  };
  const origin = (() => {
    try {
      const url = new URL(siteOrigin);
      return url.protocol === 'http:' || url.protocol === 'https:'
        ? url.origin
        : 'http://localhost:3000';
    } catch {
      return 'http://localhost:3000';
    }
  })();
  const requestedPath = asPath.split(/[?#]/, 1)[0];
  const canonicalPath =
    requestedPath.startsWith('/') && !requestedPath.startsWith('//') ? requestedPath : pathname;
  let canonicalUrl = new URL(canonicalPath, origin);
  if (canonicalUrl.origin !== origin) {
    canonicalUrl = new URL(pathname, origin);
  }

  return {
    title: route.title,
    description: route.description,
    canonical: canonicalUrl.toString(),
    robots: route.indexable ? 'index, follow' : 'noindex, nofollow',
  };
}

type RouteMetadataProps = {
  pathname: string;
  asPath: string;
};

export default function RouteMetadata({ pathname, asPath }: RouteMetadataProps) {
  const metadata = getRouteMetadata(pathname, asPath);

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="canonical" href={metadata.canonical} />
      <meta name="robots" content={metadata.robots} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CatChain" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
    </Head>
  );
}
