import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Заполните обязательные поля",
        description: "Имя и телефон необходимы для записи",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Спасибо за заявку!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({ name: "", phone: "", comment: "" });
  };

  return (
    <section id="join" className="py-20 px-6 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
          Присоединяйтесь к нам
        </h2>
        
        <p className="text-xl text-center mb-12 text-foreground/80">
          Оставьте заявку, и мы расскажем всё о ближайших занятиях
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg py-6 rounded-full w-full"
            asChild
          >
            <a href="https://t.me/gromche_choir" target="_blank" rel="noopener noreferrer">
              📱 Telegram-канал хора
            </a>
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg py-6 rounded-full w-full"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              📄 Договор оферта
            </a>
          </Button>
        </div>
        
        <div className="bg-card rounded-3xl p-10 shadow-soft">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Оставить заявку
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                placeholder="Ваше имя *" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-14 text-lg rounded-2xl"
                required
              />
            </div>
            
            <div>
              <Input 
                placeholder="Телефон *" 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-14 text-lg rounded-2xl"
                required
              />
            </div>
            
            <div>
              <Textarea 
                placeholder="Комментарий или вопрос (необязательно)" 
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="min-h-32 text-lg rounded-2xl resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              variant="hero" 
              size="lg" 
              className="w-full text-lg py-6 rounded-full"
            >
              <Send className="mr-2" />
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
