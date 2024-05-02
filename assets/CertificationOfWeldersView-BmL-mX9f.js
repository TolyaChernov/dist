import { s as h, a as w, b as f } from './inputtext.esm-DsxsqCB6.js'
import {
  r as s,
  c as n,
  a as t,
  k as l,
  F as V,
  I as g,
  q as L,
  o as p,
  t as r
} from './index-DtuzV0by.js'
import './index.esm-CI9HCI5j.js'
import './basestyle.esm-2MLB82yK.js'
import './basecomponent.esm-Duq2bS-i.js'
import './basedirective.esm-DWfBch_R.js'
import './portal.esm-B0zDxcJ8.js'
const k = { class: 'flex flex-col' },
  U = L(
    '<h1 class="text-center font-bold text-[28px]">Аттестация сварщиков сварочного производства</h1><div class="flex gap-5 mb-5"><button><i class="pi pi-plus hover:text-blue-600 text-3xl"></i></button><button><i class="pi pi-pencil hover:text-blue-600 text-3xl"></i></button><button><i class="pi pi-copy hover:text-blue-600 text-3xl"></i></button><button><i class="pi pi-times hover:text-blue-600 text-3xl"></i></button><button><i class="pi pi-print hover:text-blue-600 text-3xl"></i></button><button><i class="pi pi-search hover:text-blue-600 text-3xl"></i></button></div>',
    2
  ),
  B = { class: 'flex' },
  N = { class: 'border-0 border-y text-start px-4 py-2 w-[20px]' },
  S = { class: 'border-0 border-y text-start px-4 py-2 w-[400px]' },
  C = { class: 'border-0 border-y text-start px-4 py-2 w-2/12' },
  D = { class: 'border-0 border-y text-start px-4 py-2 w-2/12' },
  F = { class: 'border-0 border-y text-start px-4 py-2 w-2/12' },
  I = { class: 'border-0 border-y text-start px-4 py-2 w-2/12' },
  $ = { class: 'border-0 border-y text-start px-4 py-2 w-2/12' },
  q = t('br', null, null, -1),
  E = t('br', null, null, -1),
  O = { class: 'overflow-x-auto border-0' },
  T = { class: 'table table-compact w-full' },
  W = t(
    'thead',
    null,
    [
      t('tr', null, [
        t('th', { class: 'border-0 border-y text-start px-4 py-2 w-[20px]' }, '#'),
        t('th', { class: 'border-0 border-y text-start px-4 py-2 w-3/12' }, 'ФИО'),
        t('th', { class: 'border-0 border-y text-start px-4 py-2 w-2/12' }, 'Уровень'),
        t('th', { class: 'border-0 border-y text-start px-4 py-2 w-2/12' }, 'Номер удостоверения'),
        t('th', { class: 'border-0 border-y text-start px-4 py-2 w-2/12' }, 'Срок действия'),
        t('th', { class: 'border-0 border-y text-start px-4 py-2 w-2/12' }, 'Вид'),
        t('th', { class: 'border-0 border-y text-start px-4 py-2 w-2/12' }, 'Стандарт')
      ])
    ],
    -1
  ),
  j = { class: 'border-0 border-y text-start px-4 py-2' },
  z = { class: 'border-0 border-y text-start px-4 py-2' },
  A = { class: 'border-0 border-y text-start px-4 py-2' },
  G = { class: 'border-0 border-y text-start px-4 py-2' },
  H = { class: 'border-0 border-y text-start px-4 py-2' },
  J = { class: 'border-0 border-y text-start px-4 py-2' },
  K = { class: 'border-0 border-y text-start px-4 py-2' },
  ot = {
    __name: 'CertificationOfWeldersView',
    setup(M) {
      const c = s(),
        i = s(),
        x = s(),
        u = s([
          { name: '', code: '' },
          { name: '1', code: '1' },
          { name: '2', code: '2' },
          { name: '3', code: '3' },
          { name: '4', code: '4' },
          { name: '5', code: '5' }
        ]),
        b = s(),
        y = s([
          { name: 'Аттестация', code: 'a' },
          { name: 'Суртификация', code: 's' }
        ]),
        m = s([
          { name: 'ГОСТ 1063', code: 'ГОСТ 1063' },
          { name: 'НАКС', code: 'НАКС' }
        ]),
        _ = s([
          {
            id: 1,
            name: 'Иванов Иван',
            level: 3,
            number: 123456,
            date: '01.01.2024',
            view: 'Аттестация',
            standart: 'ГОСТ 1063'
          },
          {
            id: 2,
            name: 'Петров Иван',
            level: 4,
            number: 64563,
            date: '21.12.2025',
            view: 'Аттестация',
            standart: 'НАКС'
          }
        ])
      return (P, o) => {
        const a = f,
          d = h,
          v = w
        return (
          p(),
          n('div', k, [
            U,
            t('div', B, [
              t('div', N, [
                l(a, { class: 'w-full my-2', type: 'text', placeholder: '№', disabled: '' })
              ]),
              t('div', S, [
                l(a, { class: 'w-full text-[20px] py-2', type: 'text', placeholder: 'ФИО' })
              ]),
              t('div', C, [
                l(
                  d,
                  {
                    class: 'w-full p-inputtext-lg',
                    modelValue: c.value,
                    'onUpdate:modelValue': o[0] || (o[0] = (e) => (c.value = e)),
                    options: u.value,
                    optionLabel: 'name',
                    placeholder: 'Уровень'
                  },
                  null,
                  8,
                  ['modelValue', 'options']
                )
              ]),
              t('div', D, [
                l(a, {
                  class: 'w-full text-[20px] py-2',
                  type: 'text',
                  placeholder: 'Номер удостоверени'
                })
              ]),
              t('div', F, [
                l(
                  v,
                  {
                    class: 'w-full text-[20px] py-2',
                    modelValue: b.value,
                    'onUpdate:modelValue': o[1] || (o[1] = (e) => (b.value = e)),
                    placeholder: 'Срок действия'
                  },
                  null,
                  8,
                  ['modelValue']
                )
              ]),
              t('div', I, [
                l(
                  d,
                  {
                    class: 'w-full p-inputtext-lg',
                    modelValue: i.value,
                    'onUpdate:modelValue': o[2] || (o[2] = (e) => (i.value = e)),
                    options: y.value,
                    optionLabel: 'name',
                    placeholder: 'Вид'
                  },
                  null,
                  8,
                  ['modelValue', 'options']
                )
              ]),
              t('div', $, [
                l(
                  d,
                  {
                    class: 'w-full p-inputtext-lg',
                    modelValue: x.value,
                    'onUpdate:modelValue': o[3] || (o[3] = (e) => (x.value = e)),
                    options: m.value,
                    optionLabel: 'name',
                    placeholder: 'Стандарт'
                  },
                  null,
                  8,
                  ['modelValue', 'options']
                )
              ])
            ]),
            q,
            E,
            t('div', O, [
              t('table', T, [
                W,
                t('tbody', null, [
                  (p(!0),
                  n(
                    V,
                    null,
                    g(
                      _.value,
                      (e) => (
                        p(),
                        n('tr', { key: e.id }, [
                          t('td', j, r(e.id), 1),
                          t('td', z, r(e.name), 1),
                          t('td', A, r(e.level), 1),
                          t('td', G, r(e.number), 1),
                          t('td', H, r(e.date), 1),
                          t('td', J, r(e.view), 1),
                          t('td', K, r(e.standart), 1)
                        ])
                      )
                    ),
                    128
                  ))
                ])
              ])
            ])
          ])
        )
      }
    }
  }
export { ot as default }
