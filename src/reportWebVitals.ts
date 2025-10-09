import type { Metric } from 'web-vitals';

type ReportHandler = (metric: Metric) => void;

type WebVitalsModule = typeof import('web-vitals');

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (typeof onPerfEntry !== 'function') {
    return;
  }

  void import('web-vitals').then((webVitals: WebVitalsModule) => {
    const { onCLS, onFCP, onLCP, onTTFB, onINP } = webVitals;

    onCLS(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
    onINP?.(onPerfEntry);
  });
};

export default reportWebVitals;
