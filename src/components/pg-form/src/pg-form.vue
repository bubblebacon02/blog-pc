<template>
  <div class="pg-form-container">
    <el-form
      ref="pgFormRef"
      v-bind="totalProps"
      :model="formData"
      @submit.native.prevent="handleSubmit(pgFormRef)"
    >
      <el-row v-bind="props.rowConfig" style="width: 100%">
        <el-col
          v-for="(item, index) in props.formItems"
          :key="index"
          v-bind="item.col ? { span: item.col } : props.colLayout"
        >
          <el-form-item
            :prop="item.field"
            :style="item.formItemStyle || props.formItemStyle"
            :label="item.label"
          >
            <template v-if="item.labelSlot" #label>
              <slot :name="item.labelSlot"></slot>
            </template>
            <!-- ~文本框 | 密码框 -->
            <template v-if="item.type === 'text' || item.type === 'password'">
              <template v-if="item.isNumber">
                <el-input
                  v-model.number="formData[item.field]"
                  :disabled="item.disabled"
                  :type="item.type"
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder || `请输入${item.label}`"
                  auto-complete="new-password"
                  spellcheck="false"
                  autocomplete="off"
                ></el-input>
              </template>
              <!-- 这里带上了输入框的前后插槽 -->
              <template v-else>
                <el-input
                  v-model="formData[item.field]"
                  :disabled="item.disabled"
                  :type="item.type"
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                  spellcheck="false"
                  auto-complete="new-password"
                  autocomplete="off"
                >
                  <template v-if="item.prependSlot" #prepend>
                    <slot :name="item.prependSlot"></slot>
                  </template>
                  <template v-if="item.appendSlot" #append>
                    <slot :name="item.appendSlot"></slot>
                  </template>
                </el-input>
              </template>
            </template>
            <!-- ~下拉框 -->
            <template v-else-if="item.type === 'select'">
              <el-select
                v-model="formData[item.field]"
                v-bind="item.otherElConfig"
                :disabled="item.disabled"
                :placeholder="item.placeholder"
              >
                <!-- 下拉框头部插槽 -->
                <template v-if="item.headerSlot" #header>
                  <slot :name="item.headerSlot"></slot>
                </template>
                <el-option
                  v-for="option in item.options"
                  :key="option.id"
                  :label="option[item.formatProps?.label || 'label']"
                  :value="it[item.formatProps?.value || 'value']"
                >
                </el-option>
              </el-select>
            </template>
            <!-- ~单选 -->
            <template v-else-if="item.type === 'radio'">
              <el-radio-group v-model="FormData[item.field]">
                <el-radio
                  v-for="(option, index) in item.options"
                  :key="index"
                  :label="option[item.formatProps?.value || 'value']"
                  :disabled="item.disabled"
                  >{{ option[item.formatProps?.label || "label"] }}</el-radio
                >
              </el-radio-group>
            </template>
            <!-- ~文本域 -->
            <template v-else-if="item.type === 'textarea'">
              <el-input
                v-model="formData[item.field]"
                v-bind="item.otherElConfig"
                :type="item.type"
                :placeholder="item.placeholder"
              ></el-input>
            </template>
            <!-- ~选择日期 -->
            <template v-else-if="item.type === 'date-select'">
              <el-date-picker
                v-model="formData[item.field]"
                v-bind="item.otherElConfig"
                :type="item?.otherElConfig?.type || 'date'"
                :placeholder="item.placeholder"
              />
            </template>
            <!-- ~自定义 -->
            <template v-else-if="item.type === 'custom'">
              <slot :name="item.slotName"></slot>
            </template>
          </el-form-item>
        </el-col>
        <el-col v-bind="props.colLayout">
          <el-form-item class="form-footer">
            <slot name="footer">
              <el-button @click="handleReset(jcFormRef)">{{
                props.footerConfig.resetText
              }}</el-button>
              <el-button type="primary" @click="handleSubmit(jcFormRef)">{{
                props.footerConfig.submitText
              }}</el-button>
            </slot>
            <button type="submit" style="display: none"></button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useAttrs } from "vue";
import { PgFormProps } from "./pg-form";

const $attrs = useAttrs();
const props = withDefaults(defineProps<PgFormProps>(), {
  rules: () => ({}),
  rowConfig: () => {
    return { gutter: 10 };
  },
  colLayout: () => {
    return { xs: 24, sm: 12, md: 8, lg: 8, xl: 6 };
  },
  isFooter: true,
  labelWidth: 100,
  footerConfig: () => {
    return { resetText: "重置", submitText: "提交" };
  },
});

const totalProps = computed(() => {
  return {
    ...$attrs,
    ...props,
  };
});

// 提交表单
const handleSubmit = async (formEl) => {
  console.log("提交表单动作", formEl);
};
// 重置表单
const handleReset = async (formEl) => {
  console.log("重置表单动作");
};
</script>

<style lang="less" scoped></style>
