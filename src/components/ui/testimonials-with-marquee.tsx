import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "py-12 sm:py-24 md:py-32",
      className
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16 px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-8">
          <div className="group flex overflow-hidden [--gap:1rem] [gap:var(--gap)] [--duration:120s]">
            <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] [gap:var(--gap)]">
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                <TestimonialCard 
                  key={`testimonial-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}

