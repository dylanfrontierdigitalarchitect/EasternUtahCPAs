import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Phone } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8">Let's discuss your accounting and auditing needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-white">Call Us</h3>
              </div>
              <a href="tel:4357890960" className="text-white text-xl font-semibold hover:text-accent transition">
                435-789-0960
              </a>
              <p className="text-white/70 text-sm mt-2">Available during business hours</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <h3 className="font-bold text-white mb-3">Our Location</h3>
              <p className="text-white/90 text-sm">
                134 West Main, Suite 101
                <br />
                Vernal, Utah 84078
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <h3 className="font-bold text-white mb-3">Business Hours</h3>
              <p className="text-white/90 text-sm">
                <strong>Tuesday & Thursday:</strong>
                <br />8 AM - 5 PM
                <br />
                <strong>Mon, Wed, Fri:</strong>
                <br />
                By Appointment
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="font-bold text-primary mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Name</label>
                <Input placeholder="John Doe" className="bg-muted" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="bg-muted" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Service Needed</label>
                <Input placeholder="e.g., Audit Services, Tax Planning" className="bg-muted" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea placeholder="Tell us about your needs..." className="bg-muted min-h-24" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                Send Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
