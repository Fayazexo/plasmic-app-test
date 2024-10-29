// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3Bw6X8Yi7kGZob8R7n5SZE
// Component: 1EIcL4oL9Bi6

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageLayout from "../../PageLayout"; // plasmic-import: O0Buw3gewmJp/component
import { AntdDatePicker } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { datePickerHelpers as AntdDatePicker_Helpers } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import Statistic from "../../Statistic"; // plasmic-import: ZDvaXRwd37ef/component
import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";
import { SimpleChart } from "@plasmicpkgs/react-chartjs-2";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsm9JoBvdkqf0E } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: m9JOBvdkqf0e/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3Bw6X8Yi7kGZob8R7n5SZE/projectcss
import sty from "./PlasmicBusinessMetrics.module.css"; // plasmic-import: 1EIcL4oL9Bi6/css

createPlasmicElementProxy;

export type PlasmicBusinessMetrics__VariantMembers = {};
export type PlasmicBusinessMetrics__VariantsArgs = {};
type VariantPropType = keyof PlasmicBusinessMetrics__VariantsArgs;
export const PlasmicBusinessMetrics__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBusinessMetrics__ArgsType = {};
type ArgPropType = keyof PlasmicBusinessMetrics__ArgsType;
export const PlasmicBusinessMetrics__ArgProps = new Array<ArgPropType>();

export type PlasmicBusinessMetrics__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  h1?: Flex__<"h1">;
  start?: Flex__<typeof AntdDatePicker>;
  end?: Flex__<typeof AntdDatePicker>;
  select?: Flex__<typeof AntdSelect>;
};

export interface DefaultBusinessMetricsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBusinessMetrics__RenderFunc(props: {
  variants: PlasmicBusinessMetrics__VariantsArgs;
  args: PlasmicBusinessMetrics__ArgsType;
  overrides: PlasmicBusinessMetrics__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "start.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "end.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "month"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    topRevByCountryInDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "rvHaPhnon2j7by3UbsXqKf",
        opId: "6401335a-38d3-463d-adf4-2cdc2aed741b",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.6401335a-38d3-463d-adf4-2cdc2aed741b.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    ordersByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "rvHaPhnon2j7by3UbsXqKf",
        opId: "281f239a-da82-468c-b71b-fb4b06c1ff55",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.281f239a-da82-468c-b71b-fb4b06c1ff55.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    signupsByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "rvHaPhnon2j7by3UbsXqKf",
        opId: "b77b70f7-7609-4206-9577-da1b9225e63d",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.b77b70f7-7609-4206-9577-da1b9225e63d.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    totalRevByCustomDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "rvHaPhnon2j7by3UbsXqKf",
        opId: "159ce17d-2553-4737-a176-dfaed25794c6",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.159ce17d-2553-4737-a176-dfaed25794c6.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    monthlyRevByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "rvHaPhnon2j7by3UbsXqKf",
        opId: "4bdaf18e-9145-4a42-9a2a-cccf5f964f16",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.4bdaf18e-9145-4a42-9a2a-cccf5f964f16.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    quarterlyRevByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "rvHaPhnon2j7by3UbsXqKf",
        opId: "860b6180-7cc4-49a3-b243-7ff56aa73810",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.860b6180-7cc4-49a3-b243-7ff56aa73810.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsm9JoBvdkqf0E()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <section
                    className={classNames(projectcss.all, sty.section__z4PJh)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__dqgkq)}
                    >
                      <h1
                        data-plasmic-name={"h1"}
                        data-plasmic-override={overrides.h1}
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.h1
                        )}
                      >
                        {"Business Metrics"}
                      </h1>
                    </div>
                  </section>
                  <section
                    className={classNames(projectcss.all, sty.section___2I3Xp)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__awd0T)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__a8BF
                        )}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__fk05R
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 500 }}
                            >
                              {"Custom date range analysis"}
                            </span>
                          </React.Fragment>
                        </h2>
                      </div>
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__w6Er9
                        )}
                      >
                        {(() => {
                          const child$Props = {
                            allowClear: true,
                            bordered: true,
                            className: classNames("__wab_instance", sty.start),
                            onChange:
                              generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["start", "value"],
                                AntdDatePicker_Helpers
                              ),
                            picker: "date",
                            popupBodyClassName: classNames({
                              [sty["pcls_yARcOadvWn9p"]]: true
                            }),
                            popupClassName: classNames({
                              [sty["pcls_ISlGjtgmGqve"]]: true
                            }),
                            popupHeaderClassName: classNames({
                              [sty["pcls_w-5Gt8Xnbv3L"]]: true
                            }),
                            popupScopeClassName: sty["start__datePickerPopup"],
                            showTime: false,
                            value: generateStateValueProp($state, [
                              "start",
                              "value"
                            ])
                          };
                          initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "start.value"
                              }
                            ],
                            [],
                            AntdDatePicker_Helpers ?? {},
                            child$Props
                          );

                          return (
                            <AntdDatePicker
                              data-plasmic-name={"start"}
                              data-plasmic-override={overrides.start}
                              {...child$Props}
                            />
                          );
                        })()}
                        {(() => {
                          const child$Props = {
                            allowClear: true,
                            bordered: true,
                            className: classNames("__wab_instance", sty.end),
                            defaultValue: ``,
                            onChange:
                              generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["end", "value"],
                                AntdDatePicker_Helpers
                              ),
                            picker: "date",
                            popupScopeClassName: sty["end__datePickerPopup"],
                            value: generateStateValueProp($state, [
                              "end",
                              "value"
                            ])
                          };
                          initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "end.value"
                              }
                            ],
                            [],
                            AntdDatePicker_Helpers ?? {},
                            child$Props
                          );

                          return (
                            <AntdDatePicker
                              data-plasmic-name={"end"}
                              data-plasmic-override={overrides.end}
                              {...child$Props}
                            />
                          );
                        })()}
                      </Stack__>
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__ggFUk)}
                    >
                      <Statistic
                        className={classNames(
                          "__wab_instance",
                          sty.statistic__mcrQj
                        )}
                        hideTrendTracker={true}
                        number={
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2__iaNv3
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $queries.signupsByDateRange.data[0]
                                    .signup_count;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "NULL";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </h2>
                        }
                        unit={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__a6Mu9
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__m7KmI
                              )}
                              style={(() => {
                                try {
                                  return undefined;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}
                            >
                              {"Sign-ups"}
                            </div>
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img__e2Fm)}
                              displayHeight={"auto"}
                              displayMaxHeight={"24px"}
                              displayMaxWidth={"24px"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/dashboard/images/image7.svg",
                                fullWidth: 150,
                                fullHeight: 150,
                                aspectRatio: 1
                              }}
                            />
                          </div>
                        }
                      />

                      <Statistic
                        className={classNames(
                          "__wab_instance",
                          sty.statistic__ihR5S
                        )}
                        hideTrendTracker={true}
                        number={
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2__pmUPw
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $queries.ordersByDateRange.data[0]
                                    .order_count;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "NULL";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </h2>
                        }
                        unit={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__hnCv2
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__uqF0E
                              )}
                            >
                              {"Orders"}
                            </div>
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img__nk1Ip)}
                              displayHeight={"auto"}
                              displayMaxHeight={"24px"}
                              displayMaxWidth={"24px"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/dashboard/images/orderIcon.svg",
                                fullWidth: 150,
                                fullHeight: 150,
                                aspectRatio: 1
                              }}
                            />
                          </div>
                        }
                      />

                      <Statistic
                        className={classNames(
                          "__wab_instance",
                          sty.statistic__hSy2G
                        )}
                        hideTrendTracker={true}
                        number={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__idldO
                            )}
                          >
                            <h2
                              className={classNames(
                                projectcss.all,
                                projectcss.h2,
                                projectcss.__wab_text,
                                sty.h2__mNfLz
                              )}
                            >
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return (
                                      "$" +
                                      Intl.NumberFormat("en").format(
                                        $queries.totalRevByCustomDateRange
                                          .data[0].total_revenue
                                      )
                                    );
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "NULL";
                                    }
                                    throw e;
                                  }
                                })()}
                              </React.Fragment>
                            </h2>
                          </div>
                        }
                        unit={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__sytaF
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__tkIv
                              )}
                            >
                              {"Revenue"}
                            </div>
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img__qoRwI)}
                              displayHeight={"auto"}
                              displayMaxHeight={"24px"}
                              displayMaxWidth={"24px"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/dashboard/images/dollarIcon.svg",
                                fullWidth: 150,
                                fullHeight: 150,
                                aspectRatio: 1
                              }}
                            />
                          </div>
                        }
                      />
                    </Stack__>
                  </section>
                  <section
                    className={classNames(projectcss.all, sty.section__n7F1Y)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__vdiOa)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___5BXmz
                        )}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2___1Yb2Z
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 500 }}
                            >
                              {"Revenue Trends"}
                            </span>
                          </React.Fragment>
                        </h2>
                        <AntdSelect
                          data-plasmic-name={"select"}
                          data-plasmic-override={overrides.select}
                          bordered={true}
                          className={classNames("__wab_instance", sty.select)}
                          defaultOpen={false}
                          defaultStylesClassName={classNames(
                            projectcss.root_reset,
                            projectcss.plasmic_default_styles,
                            projectcss.plasmic_mixins,
                            projectcss.plasmic_tokens,
                            plasmic_antd_5_hostless_css.plasmic_tokens,
                            plasmic_plasmic_rich_components_css.plasmic_tokens
                          )}
                          defaultValue={"month"}
                          onChange={generateStateOnChangeProp($state, [
                            "select",
                            "value"
                          ])}
                          options={(() => {
                            const __composite = [
                              { value: null, label: null, type: null },
                              { value: null, label: null, type: "option" }
                            ];
                            __composite["0"]["value"] = "month";
                            __composite["0"]["label"] = "month";
                            __composite["0"]["type"] = "option";
                            __composite["1"]["value"] = "quarterly";
                            __composite["1"]["label"] = "quarterly";
                            return __composite;
                          })()}
                          placeholder={"Select..."}
                          popupScopeClassName={sty["select__popup"]}
                          value={generateStateValueProp($state, [
                            "select",
                            "value"
                          ])}
                        />
                      </div>
                      <SimpleChart
                        className={classNames(
                          "__wab_instance",
                          sty.chart__rIlbq
                        )}
                        data={
                          $state.select.value === "month"
                            ? $queries.monthlyRevByDateRange.data
                            : $queries.quarterlyRevByDateRange.data
                        }
                        interactive={false}
                        title={``}
                        type={"bar"}
                      />
                    </Stack__>
                  </section>
                  <section
                    className={classNames(projectcss.all, sty.section__vihp0)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__f0VZ1)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__dbDbL
                        )}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__nkEd
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 500 }}
                            >
                              {"Revenue per country: within the last year"}
                            </span>
                          </React.Fragment>
                        </h2>
                      </div>
                      <SimpleChart
                        className={classNames(
                          "__wab_instance",
                          sty.chart__a1Zwb
                        )}
                        data={$queries.topRevByCountryInDateRange.data}
                        interactive={false}
                        labelField={"country"}
                        title={"Revenue by country"}
                        type={"bar"}
                      />
                    </Stack__>
                  </section>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "h1", "start", "end", "select"],
  pageLayout: ["pageLayout", "h1", "start", "end", "select"],
  h1: ["h1"],
  start: ["start"],
  end: ["end"],
  select: ["select"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  h1: "h1";
  start: typeof AntdDatePicker;
  end: typeof AntdDatePicker;
  select: typeof AntdSelect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBusinessMetrics__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBusinessMetrics__VariantsArgs;
    args?: PlasmicBusinessMetrics__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBusinessMetrics__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBusinessMetrics__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBusinessMetrics__ArgProps,
          internalVariantPropNames: PlasmicBusinessMetrics__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBusinessMetrics__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBusinessMetrics";
  } else {
    func.displayName = `PlasmicBusinessMetrics.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "3Bw6X8Yi7kGZob8R7n5SZE"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicBusinessMetrics = Object.assign(
  // Top-level PlasmicBusinessMetrics renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    h1: makeNodeComponent("h1"),
    start: makeNodeComponent("start"),
    end: makeNodeComponent("end"),
    select: makeNodeComponent("select"),

    // Metadata about props expected for PlasmicBusinessMetrics
    internalVariantProps: PlasmicBusinessMetrics__VariantProps,
    internalArgProps: PlasmicBusinessMetrics__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBusinessMetrics;
/* prettier-ignore-end */
