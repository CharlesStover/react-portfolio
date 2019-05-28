import hsl2rgb from '@charlesstover/hsl2rgb';

export default function hsl2css(
  hue: number,
  saturation: number,
  lightness: number,
): string {
  return (
    'rgb(' +
      hsl2rgb(hue, saturation, lightness)
        .map((x: number) => Math.round(x * 255))
        .join(', ') +
    ')'
  );
}
