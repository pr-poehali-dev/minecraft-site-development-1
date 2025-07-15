import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const minigames = [
    {
      name: "BedWars",
      players: "128/160",
      description: "Защищай свою кровать и уничтожай кровати врагов",
      status: "online",
      icon: "🛏️"
    },
    {
      name: "SkyWars",
      players: "96/120",
      description: "Сражайся на летающих островах",
      status: "online", 
      icon: "☁️"
    },
    {
      name: "BuildBattle",
      players: "45/80",
      description: "Покажи свои строительные навыки",
      status: "online",
      icon: "🏗️"
    },
    {
      name: "TNT Run",
      players: "24/32",
      description: "Беги и не упади в лаву!",
      status: "online",
      icon: "💥"
    }
  ];

  const serverStats = [
    { label: "Онлайн игроков", value: "1,247", icon: "Users" },
    { label: "Всего зарегистрировано", value: "15,823", icon: "UserCheck" },
    { label: "Активных мини-игр", value: "12", icon: "Gamepad2" },
    { label: "Ивентов за неделю", value: "8", icon: "Calendar" }
  ];

  return (
    <div className="min-h-screen bg-minecraft-black text-white">
      {/* Header */}
      <header className="border-b border-minecraft-gray bg-minecraft-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/img/0fdaf6a9-1720-4916-91c1-af6e5772cdd3.jpg" 
                alt="REDBOXPVP Logo" 
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-minecraft-red">REDBOXPVP</h1>
                <p className="text-sm text-gray-400">Minecraft Server</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-white hover:text-minecraft-red">
                Главная
              </Button>
              <Button variant="ghost" className="text-white hover:text-minecraft-red">
                Правила
              </Button>
              <Button variant="ghost" className="text-white hover:text-minecraft-red">
                Донат
              </Button>
              <Button variant="ghost" className="text-white hover:text-minecraft-red">
                Контакты
              </Button>
            </nav>
            <Button className="bg-minecraft-red hover:bg-minecraft-darkred text-white">
              Подключиться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-minecraft-red to-red-400 bg-clip-text text-transparent animate-fade-in">
              REDBOXPVP
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
              Лучшие мини-игры и захватывающие ивенты ждут тебя!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center space-x-2 bg-minecraft-gray/30 rounded-lg px-4 py-2">
                <Icon name="Server" size={20} className="text-minecraft-red" />
                <span className="font-mono">play.redboxpvp.ru</span>
              </div>
              <div className="flex items-center space-x-2 bg-minecraft-gray/30 rounded-lg px-4 py-2">
                <Icon name="Gamepad2" size={20} className="text-green-500" />
                <span>Версия 1.19-1.20</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-minecraft-red hover:bg-minecraft-darkred text-white px-8 py-3 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-minecraft-red text-minecraft-red hover:bg-minecraft-red hover:text-white px-8 py-3 text-lg">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать лаунчер
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Server Stats */}
      <section className="py-16 px-4 bg-minecraft-gray/10">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-minecraft-red">
            Статистика сервера
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serverStats.map((stat, index) => (
              <Card key={index} className="bg-minecraft-gray/20 border-minecraft-lightgray hover:bg-minecraft-gray/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Icon name={stat.icon as any} size={32} className="text-minecraft-red mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Games */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-minecraft-red">
            Популярные мини-игры
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minigames.map((game, index) => (
              <Card key={index} className="bg-minecraft-gray/20 border-minecraft-lightgray hover:bg-minecraft-gray/30 transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <span className="text-2xl">{game.icon}</span>
                      {game.name}
                    </CardTitle>
                    <Badge className="bg-green-600 text-white">
                      {game.players}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{game.description}</p>
                  <Button className="w-full bg-minecraft-red hover:bg-minecraft-darkred text-white group-hover:bg-minecraft-darkred">
                    <Icon name="Play" size={16} className="mr-2" />
                    Играть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 bg-minecraft-gray/10">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-minecraft-red">
            Предстоящие ивенты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-minecraft-gray/20 border-minecraft-lightgray">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Trophy" size={24} className="text-yellow-500" />
                  Турнир по BedWars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Призовой фонд: 10,000₽</p>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon name="Clock" size={16} />
                  Завтра в 19:00
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-minecraft-gray/20 border-minecraft-lightgray">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Gift" size={24} className="text-minecraft-red" />
                  Раздача привилегий
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Розыгрыш VIP статуса</p>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon name="Clock" size={16} />
                  Через 3 дня
                </div>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-gray/20 border-minecraft-lightgray">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Zap" size={24} className="text-blue-500" />
                  Двойной опыт
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">x2 опыта во всех играх</p>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon name="Clock" size={16} />
                  Сейчас активно!
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-minecraft-gray">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold text-minecraft-red mb-4">REDBOXPVP</h4>
              <p className="text-gray-400">
                Лучший Minecraft сервер с мини-играми и ивентами
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-minecraft-red transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-minecraft-red transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-minecraft-red transition-colors">Донат</a></li>
                <li><a href="#" className="hover:text-minecraft-red transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Мини-игры</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-minecraft-red transition-colors">BedWars</a></li>
                <li><a href="#" className="hover:text-minecraft-red transition-colors">SkyWars</a></li>
                <li><a href="#" className="hover:text-minecraft-red transition-colors">BuildBattle</a></li>
                <li><a href="#" className="hover:text-minecraft-red transition-colors">TNT Run</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-minecraft-red">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-minecraft-red">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-minecraft-red">
                  <Icon name="Users" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-minecraft-gray text-center text-gray-400">
            <p>&copy; 2024 REDBOXPVP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;