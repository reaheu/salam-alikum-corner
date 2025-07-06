
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Brain, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Brain className="w-10 h-10 text-purple-600" />
            اختبار الوظائف الإدراكية MBTI
          </h1>
          <p className="text-lg text-gray-600">
            اكتشف نمط شخصيتك ووظائفك الإدراكية بدقة
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-purple-800 flex items-center justify-center gap-2">
              💡 مرحبًا بك في اختبار الوظائف الإدراكية!
            </CardTitle>
            <CardDescription className="text-lg text-gray-700">
              يهدف هذا الاختبار إلى مساعدتك في فهم الوظائف الإدراكية التي تستخدمها بشكل طبيعي.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Important Guidelines */}
        <Card className="mb-8 border-2 border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-xl text-amber-800 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              تنبيه هام:
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  الإجابات الصادقة:
                </h3>
                <p className="text-gray-700 text-sm">
                  أجب على الأسئلة بصدق تام، واختر الإجابة التي تعبر عنك أكثر في معظم المواقف، وليس ما تتمنى أن تكون عليه.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">خيارات متعددة:</h3>
                <p className="text-gray-700 text-sm">
                  يمكنك اختيار إجابة واحدة أو إجابتين كحد أقصى لكل سؤال إذا كنت تشعر أن كلاهما يعبر عنك.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">لا يوجد إجابات صحيحة أو خاطئة:</h3>
                <p className="text-gray-700 text-sm">
                  جميع الإجابات مقبولة، والهدف هو فهمك لذاتك.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">كل إجابة تفرق:</h3>
                <p className="text-gray-700 text-sm">
                  تذكر أن كل إجابة تفرق وتؤثر بشكل مباشر على النتائج النهائية ودقة تحديد وظائفك الإدراكية ونمط شخصيتك.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
              <h3 className="font-semibold text-amber-800 mb-2 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                مدة الاختبار:
              </h3>
              <p className="text-gray-700">
                قد يستغرق الاختبار بعض الوقت، لذا تأكد أن لديك متسعًا من الوقت والتركيز.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Start Button */}
        <div className="text-center">
          <Link to="/test">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              ابدأ الاختبار
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
