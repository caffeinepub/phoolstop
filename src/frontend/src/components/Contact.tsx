import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    businessName: "",
    businessType: "",
    city: "",
    budgetRange: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "*New Enquiry from PhoolStop Website*",
      `Business Name: ${form.businessName}`,
      form.businessType ? `Business Type: ${form.businessType}` : "",
      form.city ? `City: ${form.city}` : "",
      form.budgetRange ? `Monthly Budget: ${form.budgetRange}` : "",
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("%0A");
    window.open(`https://wa.me/919607317878?text=${lines}`, "_blank");
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: "#F3E3D8" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl md:text-[34px] font-bold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Ready to Simplify Your{" "}
            <span style={{ color: "#35502A" }}>Flower Procurement?</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Tell us about your business and we'll get back to you within a
            business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card">
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.modal"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="businessName"
                      className="text-sm font-medium"
                    >
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      data-ocid="contact.input"
                      placeholder="e.g. The Orchid Hotel"
                      required
                      value={form.businessName}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          businessName: e.target.value,
                        }))
                      }
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">
                      Business Type *
                    </Label>
                    <Select
                      required
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, businessType: v }))
                      }
                    >
                      <SelectTrigger
                        data-ocid="contact.select"
                        className="rounded-lg"
                      >
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Hotel">Hotel</SelectItem>
                        <SelectItem value="Restaurant">Restaurant</SelectItem>
                        <SelectItem value="Temple">Temple</SelectItem>
                        <SelectItem value="Corporate">Corporate</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="city" className="text-sm font-medium">
                      City
                    </Label>
                    <Input
                      id="city"
                      data-ocid="contact.input"
                      placeholder="Mumbai"
                      value={form.city}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, city: e.target.value }))
                      }
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">
                      Monthly Budget Range
                    </Label>
                    <Select
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, budgetRange: v }))
                      }
                    >
                      <SelectTrigger
                        data-ocid="contact.select"
                        className="rounded-lg"
                      >
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="₹5,000 – ₹7,000 (Starter)">
                          ₹5,000 – ₹7,000 (Starter)
                        </SelectItem>
                        <SelectItem value="₹15,000 – ₹20,000 (Growth)">
                          ₹15,000 – ₹20,000 (Growth)
                        </SelectItem>
                        <SelectItem value="₹2,00,000 – ₹4,00,000 (Enterprise)">
                          ₹2,00,000 – ₹4,00,000 (Enterprise)
                        </SelectItem>
                        <SelectItem value="Not Sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message (optional)
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    placeholder="Tell us about your requirements — flower types, frequency, volumes..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  className="w-full rounded-full font-semibold py-3 text-white flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-center space-y-6"
          >
            <div>
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: "#1A1A1A" }}
              >
                Get in Touch
              </h3>
              <p className="text-sm text-gray-600">
                We work with procurement teams across Mumbai's hospitality, food
                & beverage, and corporate sectors.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:reachphoolstopofficial@gmail.com"
                className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
                style={{ color: "#35502A" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(53,80,42,0.1)" }}
                >
                  <Mail size={18} style={{ color: "#35502A" }} />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-600 text-xs">
                    reachphoolstopofficial@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/919607317878"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.button"
                className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
                style={{ color: "#25D366" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(37,211,102,0.1)" }}
                >
                  <MessageCircle size={18} style={{ color: "#25D366" }} />
                </div>
                <div>
                  <div className="font-medium text-gray-800">WhatsApp</div>
                  <div className="text-gray-600 text-xs">+91 9607317878</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-sm">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(53,80,42,0.1)" }}
                >
                  <Clock size={18} style={{ color: "#35502A" }} />
                </div>
                <div>
                  <div className="font-medium text-gray-800">Response Time</div>
                  <div className="text-gray-600 text-xs">
                    We typically respond within a business day.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
