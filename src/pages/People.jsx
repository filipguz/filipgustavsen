import PageContainer from '../components/PageContainer'
import Section from '../components/Section'
import OutdoorScene from '../components/OutdoorScene'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

const photos = [
  { src: '/surfing.jpg', alt: 'Surfing' },
  { src: '/coachingwindsurfing.jpg', alt: 'Coaching windsurfing' },
  { src: '/vintertur.jpg', alt: 'Vintertur' },
]

export default function People() {
  const { lang } = useLanguage()
  const txt = t[lang].people

  return (
    <PageContainer>
      <div className="mb-10 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">
            {txt.title}
          </h1>
          <p className="text-base text-gray-600 max-w-xl leading-relaxed">
            {txt.intro}
          </p>
        </div>
        <OutdoorScene className="w-32 shrink-0 text-gray-300 hidden sm:block" />
      </div>

      <div className="grid grid-cols-3 gap-3 mb-12">
        {photos.map((photo) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="w-full aspect-square object-cover rounded-lg"
          />
        ))}
      </div>

      <Section title={txt.experienceTitle}>
        <div className="space-y-3">
          {txt.experience.map((item) => (
            <div key={item.role} className="flex items-baseline gap-3">
              <span className="text-sm font-medium text-gray-900 min-w-44">{item.role}</span>
              <span className="text-sm text-gray-500">{item.note}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={txt.educationTitle}>
        <div className="space-y-3">
          {txt.education.map((item) => (
            <div key={item.title} className="flex items-baseline gap-3">
              <span className="text-sm font-medium text-gray-900 min-w-44">{item.title}</span>
              {item.institution && (
                <span className="text-sm text-gray-500">{item.institution}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title={txt.skillsTitle}>
        <div className="flex flex-wrap gap-2">
          {txt.skills.map((skill) => (
            <span key={skill} className="text-sm px-3 py-1 border border-gray-200 rounded text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </Section>
    </PageContainer>
  )
}
